import React from 'react'

import './Contact.module.css'

function Contact(){
    return (
        <div>
            <h1> Nous Contacter</h1>
            <form>
            <div>
                <input type='text' alt='nom' placeholder='Votre nom' />
                <input type='text' alt='prenom' placeholder='Votre prenom'/>
            </div>
            <div>
                <input type='email' alt='email' placeholder='Votre email'/>
            </div>
            <div>
                <input type='text' alt='object' placeholder='Object du message'/>
            </div>
            <div>
                <textarea alt='message' placeholder='Votre message'/>
            </div>
            <div>
                <input type='submit' alt='envoyer' name='submit' value='Submit'/>
            </div>
            </form>
        </div>
    )
}

export default Contact;