FROM node:lts-alpine

WORKDIR /nasa-project-main

COPY package.json /nasa-project-main

COPY client/package.json client/
RUN npm run install-client --omit=dev

COPY server/package.json server/
RUN npm run install-server --omit=dev

COPY client/ client/
RUN npm run build --prefix client

COPY server/ server/

USER node

CMD [ "npm", "start", "--prefix", "server" ]

EXPOSE 8000