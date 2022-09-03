# Twibbers

 A look a like site of twitter

## Download python requirements

```bash
pip3 install -r requirements.txt
```

All descriptions starts on the base directory, I recommend to create two terminals, one for django and anothe for react, even though you only need django to run on production
 
## Run Django :feelsgood:

```bash
cd app
python3 .\manage.py makemigrations
python3 .\manage.py makemigrations api
python3 .\manage.py migrate
python3 .\manage.py runserver
```

## Start react to development

```bash
cd frontend/
npm install
npm start
```
