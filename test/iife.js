console.log("*****IIFE function******"); // Immediately Invoked Function Expression (IIFE)

(function(){

    console.log('Airflow connected');
})();

( (name) => {
    console.log(`Airflow Connected to ${name}`);
})('DockerJS');