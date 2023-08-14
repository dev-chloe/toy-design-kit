# HISTORY OF DESIGN KIT - 4

## A. Provision AWS resources

1. Prepare AWS CLI v2 (check [other ways](https://docs.aws.amazon.com/ko_kr/cli/latest/userguide/getting-started-install.html)):

   ```bash
   # Install
   brew install awscli

   # Check
   aws --version
     # aws-cli/2.xx.x ...
   ```

   ```bash
   # Install recommend
   brew install jq

   # Check
   jq --version
     # jq-1.6
   ```

2. [Set AWS credetials (after IAM user & role setting)](https://docs.aws.amazon.com/ko_kr/cli/latest/userguide/cli-configure-files.html#cli-configure-files-methods):

   ```bash
   # Save credentials
   aws configure
     # AWS Access Key ID [None]: (paste the Access Key ID)
     # AWS Secret Access Key [None]: (paste the Secret Access Key)
     # Default region name [None]: ap-northeast-2
     # Default output format [None]: json

   # Check the sensitive data
   cat ~/.aws/credentials

   # Set profile
   export AWS_PROFILE="__profile_name__"

   # Check the credentials
   aws sts get-caller-identity --output=json | jq
   ```

3. [Create new bucket using Amazon S3](https://docs.aws.amazon.com/ko_kr/AmazonS3/latest/userguide/creating-bucket.html):
   `story.poc-in.site`

   ```bash
   # Check the created bucket exist
   aws s3 ls | grep "story.poc-in.site"
   ```

   Ref. [`aws s3 ls` command](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/ls.html)

4. [Create new public certificate using AWS Certificate Manager](https://docs.aws.amazon.com/ko_kr/acm/latest/userguide/gs-acm-request-public.html)  
   Then, record to DNS service to validate the certificate:

   ```bash
   # Check the DNS record
   nslookup <CNAME>
   # or
   dig <CNAME>
   ```

5. [Create new distribution using AWS CloudFront](https://docs.aws.amazon.com/ko_kr/AmazonCloudFront/latest/DeveloperGuide/distribution-web-creating-console.html)

6. Regist distribution's CNAME to owned Domain Name Server (e.g gabia)

   ```bash
   # Check the DNS record
   nslookup story.poc-in.site
   # or
   dig story.poc-in.site
   ```

## B. Build storybook as static page

Prepare [serve](https://www.npmjs.com/package/serve) engine
[by. Vercel](https://github.com/vercel/serve#readme)
for static web hosting:

```bash
# Install
npm install --save-dev serve
```

Add npm script:

```json
{
  // ...
  "scripts": {
    // ...
    "storybook": "storybook dev -p 6006",
    "storybook-static": "npx serve --listen 16006 ./storybook-static",
    "build:storybook": "storybook build"
  }
  // ...
}
```

Build Storybook as static page, and hosting test:

```bash
# Build
npm run build:storybook

# Hosting
npm run storybook-static

# Check in the browser
open http://localhost:16006/
```

## C. [Deploy the static storybook to Amazon S3 bucket](https://docs.aws.amazon.com/ko_kr/cli/latest/userguide/cli-services-s3-commands.html#using-s3-commands-managing-objects-sync)

```bash
# Check local directory(source)
ls -shl "./storybook-static/."

# Set environment variable
export TARGET_BUCKET="story.poc-in.site"
env | grep "TARGET_BUCKET"

# Check current state of remote S3 bucket(target)
aws s3 ls "s3://${TARGET_BUCKET}"
# (option) Remove objects in target bucket
aws s3 rm "s3://${TARGET_BUCKET}" --recursive

# Sync objects from source to target
aws s3 sync "./storybook-static/." "s3://${TARGET_BUCKET}"
# Check result state remote S3 bucket(target)
aws s3 ls "s3://${TARGET_BUCKET}"

# TODO: Refresh cache data in CloudFront(CDN)
```
