FROM node:10-alpine

EXPOSE 8000

RUN apk add --update --repository http://dl-3.alpinelinux.org/alpine/edge/main --update-cache fftw-dev && \
    apk add --update --repository http://dl-3.alpinelinux.org/alpine/edge/testing --update-cache \
	vips-dev vips-tools gcc g++ make libc6-compat && \
    apk add git && \
    apk add python && \
    apk add bash && \
    rm -rf /var/cache/apk/*

RUN mkdir -p /site
WORKDIR /site
VOLUME /site

RUN echo 'alias ll="ls -lahG"' >> ~/.bashrc
