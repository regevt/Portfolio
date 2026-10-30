## MINIO setup

```
mkdir -p data
```
```
docker run -d --name silo \
  -p 8000:9000 \
  -p 8001:9001 \
  -e MINIO_ROOT_USER \
  -e MINIO_ROOT_PASSWORD \
  -v "$PWD/data:/data" \
  pgsty/minio:latest server /data --console-address ":9001"

```