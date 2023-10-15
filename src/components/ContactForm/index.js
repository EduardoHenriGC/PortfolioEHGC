import React from 'react';
import FormItem from '@/components/FormItem/index';
import styles from "@/styles/ContactForm/ContactForm.module.css"

export default function ContactForm({ onSubmit }) {

    return (
        <div className={styles.Container}>
            <h1>Entre em Contato</h1>
            <form onSubmit={onSubmit}>
                <FormItem inputName="name" text="Nome" />
                <FormItem inputName="email" text="Email" />
                <FormItem inputName="contact" text="Contato" />
                <FormItem inputName="message" text="Mensagem" />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
