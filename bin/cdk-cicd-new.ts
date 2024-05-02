#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkCicdNewStack } from '../lib/cdk-cicd-new-stack';

const app = new cdk.App();
new CdkCicdNewStack(app, 'CdkCicdNewStack', {

});