FROM node:latest
COPY ./pokemaster .
RUN yarn install && yarn build
CMD ["yarn", "start:prod"]
