import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import {useEffect,useState} from 'react'
import {useRef}  from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {

    const [letterClass,setLetterClass]= useState('text-animate')

    const form=useRef()

    useEffect(() => {
        setTimeout(() => {
         return setLetterClass('text-animate-hover')
       },3000)
     },[])

     const sendEmail= (e)=>{
         e.preventDefault()

         emailjs
            .sendForm(
                'gmail',
                'template_ys9qq9i',
                // template id
                form.current,
                'user_95GDu5cONkchwiuXAQxjJ'
                // user token

            )
            .then(
               () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert ('Failed to send message, Please try again later')
            }
            )
     }


  return (
    <>
        <div className="contact-page container">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t',' ','M','e']}
                    idx={15}
                    />
                </h1>
                <p> I am interested in freelancing opportunities, that helps me grow as a Developer. However, if you have any request or query,
                    don't hesitate to contact me.
                </p>

                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="Name" required/>
                            </li>

                            <li className="half">
                                <input type="email" name="email" placeholder="Email" required/>
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required/>
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND"/>
                            </li>

                        </ul>
                    </form>
                </div>
            </div>
            <div className="info-map">
                Harish,
                <br/>
                 Bhuvaneshwari Nagar, Velachery <br/>
                Chennai <br/>
                TamilNadu
                <br/>
                India
                <span>harish77.sh@gmail.com</span>
            </div>
            <div className="map-wrap">
                    <MapContainer center= {[12.972087396223237, 80.22036661067484]} zoom={13}>
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                            <Marker position={[12.972087396223237, 80.22036661067484]}>
                                <Popup>I live here, Come over for cup of coffee :)</Popup>
                            </Marker>
                    </MapContainer>
            </div>
        </div>
        <Loader type="pacman" />

    </>
  )
}

export default Contact
