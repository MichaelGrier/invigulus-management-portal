import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jiyfwa9bs1.execute-api.us-west-2.amazonaws.com/dev'
});

instance.defaults.headers.common['Authorization'] = 'Bearer eyJraWQiOiIyU1wveDBDTHFIODBzak0xbW5USXhpNmh4cXQ4MGh2b0YwcTB3YUYweVVJcz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJiNWI5MzVlNy02NjMzLTQ3NGUtYmEzYi03Yzc1YzJkMTMwNDgiLCJjb2duaXRvOmdyb3VwcyI6WyJBZG1pbmlzdHJhdG9ycyJdLCJldmVudF9pZCI6ImFhYjA4MmNjLWRhZDQtNDEwNS1iNzMxLTJjOTdiZDc5M2JlNSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MDY0MjQxMDAsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy13ZXN0LTIuYW1hem9uYXdzLmNvbVwvdXMtd2VzdC0yX1hIOUVYQlZqYSIsImV4cCI6MTYwNjQyNzcwMSwiaWF0IjoxNjA2NDI0MTAxLCJqdGkiOiIyZmM4MTgwNC0zMGQ3LTQxY2YtOTZjMi05YTFiZmNiOTgxZjEiLCJjbGllbnRfaWQiOiIxOHJwdmE0ZXFlZTgycGw0NXR1dnNscW05cSIsInVzZXJuYW1lIjoibWljaGFlbGdyaWVyIn0.cntmYGuiRrOipy3Rz7Gg5utc8asz-6E_-LmRrU2iUATkYlaIDKXfLChg_0NHBiURAaKQS6sFzSJ7XNs6BX1xZFwZZQGJ6hvttOzyt-zdN4Y7El-YKGG8ifTLMA5ebmD6LcQYjvBxpK5Hb53VK57ujwSVQnpPPZH49x1G4PBmXOTtKzRbXWJcMFhkMKEOrBC0DBDh6GXruGEe1E6-wDFCb03IRWIIzIcKFriq6XpUxvtVVpCUOUaR896jVwNKkMjZGyWO_4lRLCIfIWIb5jJ2J9KezwTL9xDEaKWvy8XBTELEbl_PSZD8b03Yd5DiiTUNMyS6RZWtjSGw__9ujZFJcw';

instance.defaults.headers.post['Content-Type'] = 'application/json';

// instance.interceptors.request...

export default instance;