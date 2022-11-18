# News API

## Install

    git clone https://github.com/eldiyar312/news-api.git

## Run the app

    docker-compose up

# REST API

The REST API to the example app is described below.

## Get news

### Request

`GET localhost:3333/api/v1/news?count=10&keywords=hello world!`

    curl -i -H 'Accept: application/json' http://localhost:3333/api/v1/news?count=10&keywords=hello world!

### Params

| key      | value  | description                                                                                                                                                                                                                                                                                            |
| -------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| count    | number | This parameter allows you to specify the number of news articles returned by the API.                                                                                                                                                                                                                  |
| keywords | string | This parameter allows you to specify your search keywords which allows you to narrow down the results. The keywords will be used to return the most relevant articles. It is possible to use logical operators with keywords, see the section on [query syntax](https://gnews.io/docs/v4#query-syntax) |

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Content-Type: application/json

    {result: { ... }}
