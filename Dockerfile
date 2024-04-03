
ARG NODE_VERSION=16.13.1

FROM node:${NODE_VERSION}-alpine


ENV NODE_ENV production


WORKDIR /usr/src/app


RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

RUN npm install -g typescript

COPY . .


EXPOSE 3000


CMD npm start