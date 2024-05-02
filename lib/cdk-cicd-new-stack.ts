import * as cdk from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';


export class CdkCicdNewStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new CodePipeline(this, 'NewPipeline', {
     pipelineName: 'NewPipeline',
     synth: new ShellStep('synth', {
      input: CodePipelineSource.gitHub('satheeshcm/cdk-cicd-new', 'main' ),
      commands: [
        'npm ci',
        'npx cdk synth'
      ]
     })
    })

    
  }
}
