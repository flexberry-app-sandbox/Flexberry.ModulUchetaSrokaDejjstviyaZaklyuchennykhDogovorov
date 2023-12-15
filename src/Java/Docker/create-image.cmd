docker build --no-cache -f SQL\Dockerfile.PostgreSql -t modul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorov-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t modul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorov-java/app ../../..
