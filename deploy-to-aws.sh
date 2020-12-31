gulp --prod
aws s3 sync ./target/ s3://lenduletmuhely.hu --delete
aws cloudfront create-invalidation --distribution-id EQY93OBO4AQQE --paths "/*"
