import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jiyfwa9bs1.execute-api.us-west-2.amazonaws.com/dev'
});

instance.defaults.headers.common['Authorization'] = 'Bearer eyJraWQiOiIyU1wveDBDTHFIODBzak0xbW5USXhpNmh4cXQ4MGh2b0YwcTB3YUYweVVJcz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJiNWI5MzVlNy02NjMzLTQ3NGUtYmEzYi03Yzc1YzJkMTMwNDgiLCJjb2duaXRvOmdyb3VwcyI6WyJBZG1pbmlzdHJhdG9ycyJdLCJldmVudF9pZCI6IjhhODBhZTc4LWVmZGYtNDRjNy1iMjIxLWViNDZkODk3YzAxYyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MDc1NTY5MTYsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy13ZXN0LTIuYW1hem9uYXdzLmNvbVwvdXMtd2VzdC0yX1hIOUVYQlZqYSIsImV4cCI6MTYwNzU2MDUxNiwiaWF0IjoxNjA3NTU2OTE2LCJqdGkiOiIxZGJhYjk5MC03ZDczLTQ1ZDktOWNkMi02OTJhMGJmYmM5ZTAiLCJjbGllbnRfaWQiOiIxOHJwdmE0ZXFlZTgycGw0NXR1dnNscW05cSIsInVzZXJuYW1lIjoibWljaGFlbGdyaWVyIn0.devGoGuDUUcxzWjAutFSacmvkEZzmK0XbaI0xDI4hFxx0W2sYnH890Ezxm_c1YLtgjVfBefuIGdPjS7PQlJn1kQhjByRoyt64BCZff0U1vet1BTbCgCEtxecf21YauJsMD5rJHX3o8GP51CAC-KzSULoUjesgprSDTC2TYnsaPCtzEKSfWwCXpJhyVbs4cg7lgm2GGbf_jp7UQZgVdTQ-HHp8-KniozXSmNEGPL-RQfyRyarzSY97rMw5AFdmlehF-pMrHaN_ShlZhjyoTWmKevlFvZzKDbAcRDRh7v07lIAmAbXPD4XKlV2C0PbQ4V5CswiAbb5_lFMGiOD5YHhWQ';
export default instance; 