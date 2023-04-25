function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/V4cZrPXGM/model.json' , modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error , results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        randomnumber_r = Math.floor(Math.random() * 255) + 1;
        randomnumber_g = Math.floor(Math.random() * 255) + 1;
        randomnumber_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("resultlabel").innerHTML = 'i can hear - ' + results[0].label;
        document.getElementById("resultaccuracy").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("resultlabel").style.color="rgb("+randomnumber_r+","+randomnumber_g+","+randomnumber_b+")" ;
        document.getElementById("resultaccuracy").style.color="rgb("+randomnumber_r+","+randomnumber_g+","+randomnumber_b+")" ;
        img1 = document.getElementById('dog')
        img2 = document.getElementById('cat')
        img3 = document.getElementById('ear')
        if(results[0].label == "Barking")
        {
            img1.src='dog.gif';
            img2.src='cat.png';
            img3.src='ear.png';
        }
        else if(results[0].label == "Meowing")
        {
            img1.src='dog.png';
            img2.src='cat.gif';
            img3.src='ear.png';
        }

        else
        {   
            img1.src='dog.png';
            img2.src='cat.png';
            img3.src='ear.gif';
        }
    }
    
}