import React, { useEffect, useRef, useState } from 'react';
import './Card.css'; 
import axios from 'axios';

const Card = () => {
  const [ecodrone, setEcodrone] = useState([]);
  const [temperature, setTemperature] = useState(0);
  const [NPK, setNPK] = useState({ level: '', color: '' });
  const [humidity, setHumidity] = useState({ level: '', color: '' });
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    axios.get('/api/ecodrone')
      .then((response) => {
        setEcodrone(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const toggleVideoPlayback = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const humid = () => {
    const humidValue = ecodrone.find(item => item.content === 'Humidity').value;
    setHumidity({ level: humidValue > 70 ? 'High' : 'Low', color: humidValue > 70 ? 'green' : 'red' });
  };

  const showTemp = () => {
    const tempValue = ecodrone.find(item => item.content === 'Temperature').value;
    setTemperature(tempValue);
  };

  const showNPK = () => {
    const nitrogenValue = ecodrone.find(item => item.content === 'Nitrogen').value;
    const phosphorusValue = ecodrone.find(item => item.content === 'Phosphorus').value;
    const potassiumValue = ecodrone.find(item => item.content === 'Potassium').value;
    const npkValue = Math.min(nitrogenValue, phosphorusValue, potassiumValue);
    setNPK({ level: npkValue < 100 ? 'Low' : 'Normal', color: npkValue < 100 ? 'red' : 'green' });
  };

  return (
    <>
    
      <h1 className="heading2 text-center mt-5">A Smart Agricultural Monitoring System..</h1>
      
      <p className='text-center date'>Date/Time: {currentTime.toLocaleString()}</p>

      <div className="rounded" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        <div className="card mt-5 mx-3" style={{ width: "18rem" }}>
          <img src="moisture.jpg" className="card-img-top card-img" alt="moisture" height={175} />
          <div className="card-body">
            <button className="btn btn-primary col-6" onClick={humid}>Humidity</button>
            <p className='mt-2 temperature-1' style={{ color: humidity.color }}>{humidity.level}</p>
          </div>
        </div>
        <div className="card mt-5 mx-3" style={{ width: "18rem" }}>
          <img src="crop_temp.jpg" className="card-img-top card-img" alt="moisture" height={175} />
          <div className="card-body">
            <button className="btn btn-primary col-6" onClick={showTemp}>Temperature</button>
            <p className='mt-2 temperature-1'>{temperature} °F</p>
          </div>
        </div>
        <div className="card mt-5 mx-3" style={{ width: "18rem" }} aria-hidden="true">
          <img src="npk.png" className="card-img-top card-img" alt="moisture" height={175} />
          <div className="card-body">
            <button className="btn btn-primary col-6" onClick={showNPK}>NPK Levels</button>
            <p className='mt-2 temperature-1' style={{ color: NPK.color }}>{NPK.level}</p>
          </div>
        </div>
        <div className="card mt-5 mx-3" style={{ width: "18rem" }} aria-hidden="true">
          <video ref={videoRef} className="card-video1" loop height={175}>
            <source src="video13.mp4" type="video/mp4" />
          </video>
          <div className="card-body">
            <button className="btn btn-primary col-6" onClick={toggleVideoPlayback}>
              {isPlaying ? 'Stop Live Video' : 'Start Live Video'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
