FROM node:lts-alpine
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# Environment port
ENV PORT=3000

# Database URL
ENV SQL_SERVER=programproj.database.windows.net
ENV SQL_SERVER_PORT=1433

# PII Database info
ENV SQL_SERVER_PII_DB=grenntickpii
ENV SQL_SERVER_PII_LOGIN=app_user_login
ENV SQL_SERVER_PII_PASSWORD=Modern_Skates_054

# User Data database info
ENV SQL_SERVER_DATA_DB=greentikdata
ENV SQL_SERVER_DATA_LOGIN=app_data_login
ENV SQL_SERVER_DATA_PASSWORD=Distinct_Iguana_670

# Blob storage connection string
ENV AZURE_BLOB_STORAGE=DefaultEndpointsProtocol=https;AccountName=greetikstorage;AccountKey=VJdSw8w1vCZHRG1kPhtq/XleshiW1hA0w23YeHZjM6fcjVsmIyYDrBi5i40xrJOYKwqmrZnP8XA6+ASt73PxTg==;EndpointSuffix=core.windows.net

ENV SAS_KEY=m9GyAx3fjQ554KzLQd3D5lQQJtElhOM0ZIm1oY6byhaqShGpXgg6ovUUx3M1RT5Bjp4OQEBLXYo8+ASteExa0g==
ENV ACCOUNT_NAME=greetikstorage

RUN npm install --production --silent && mv node_modules ../
COPY . .
RUN chown -R node /usr/src/app
USER node
EXPOSE 3000
CMD ["npm", "start"]
