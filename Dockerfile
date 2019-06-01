FROM node:10-alpine

EXPOSE 8000

RUN apk add --no-cache jq bash
RUN rm -rf /var/cache/apk/*
RUN echo 'alias ll="ls -lahG"' >> ~/.bashrc

RUN mkdir -p /site
WORKDIR /site
VOLUME /site

RUN yarn
