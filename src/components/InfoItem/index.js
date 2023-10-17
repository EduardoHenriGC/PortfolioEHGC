import React, { useState } from 'react';
import { FaCopy } from "react-icons/fa";
import styles from "@/styles/ContactInfo/ContactInfo.module.css";

export default function InfoItem({ value }) {
    const [copied, setCopied] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const handleCopyClick = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopied(true);
                setShowMessage(true);
                setTimeout(() => {
                    setShowMessage(false);
                }, 2000); // Define o tempo de exibição da mensagem "Copiado" (2 segundos)
            })
            .catch(err => {
                console.error('Erro ao copiar: ', err);
            });
    }

    return (
        <div className={styles.InfoItem}>

            <p>{value}</p>
            <FaCopy className={styles.btnCopy} onClick={() => handleCopyClick(value)} />

            {showMessage && <span>copy</span>}
        </div>
    )
}
