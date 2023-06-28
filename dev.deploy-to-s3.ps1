# Set the S3 bucket name and the path to the build files
$S3_BUCKET = "hd-development-website-static-files"
$BUILD_DIR = "./dist"

# Upload the build files to S3
aws s3 sync $BUILD_DIR s3://$S3_BUCKET --delete