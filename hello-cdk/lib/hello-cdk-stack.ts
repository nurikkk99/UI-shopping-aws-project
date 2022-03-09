import {CfnParameter, Duration, Stack, StackProps} from 'aws-cdk-lib';
import {Construct} from 'constructs';
import {ApplicationLoadBalancedEc2Service} from "aws-cdk-lib/aws-ecs-patterns";
import {InstanceClass, InstanceSize, InstanceType, SubnetType, Vpc} from "aws-cdk-lib/aws-ec2";
import {Cluster, ContainerImage} from "aws-cdk-lib/aws-ecs";
import {Repository} from "aws-cdk-lib/aws-ecr";
import {StringParameter} from "aws-cdk-lib/aws-ssm";

export class HelloCdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const ecrRepositoryName = new CfnParameter(this, 'ecrRepositoryName', {
      description: 'Name of repository ECR'
    })

    const imageTag = new CfnParameter(this, 'imageTag', {
      description: 'Tag of image'
    })

    const vpc = new Vpc(this, "VPC-UI", {
      vpcName: 'VpcUI',
      subnetConfiguration: Vpc.DEFAULT_SUBNETS_NO_NAT,
      maxAzs: 3
    })

    const cluster = new Cluster(this, 'shopping-ui-cluster', {
      vpc: vpc,
      capacity: {
        instanceType: InstanceType.of(InstanceClass.BURSTABLE3, InstanceSize.MICRO),
        desiredCapacity: 1,
        associatePublicIpAddress: true,
        vpcSubnets: {
          subnetType: SubnetType.PUBLIC
        }
      }
    })

    new ApplicationLoadBalancedEc2Service(this, 'Ec2ShoppingUI', {
      cluster: cluster,
      healthCheckGracePeriod: Duration.hours(4),
      cpu: 512,
      memoryLimitMiB: 700,
      publicLoadBalancer: true,
      taskImageOptions: {
        environment: {
         API_URL : StringParameter.valueForStringParameter(this, "adminServiceLoadBalancerDNSName")
        },
        image: ContainerImage.fromEcrRepository(
          Repository.fromRepositoryName(this, 'Repository', ecrRepositoryName.valueAsString),
          imageTag.valueAsString
        )
      }
    })
  }
}
