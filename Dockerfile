FROM node:latest
EXPOSE 80
COPY . .
RUN yarn add next
RUN yarn install
RUN yarn build
CMD ["yarn","start"]