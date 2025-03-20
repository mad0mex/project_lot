"user client";
import { useState } from "react";

export default function GnForm() {
    const fields = [
        { name: "kartoffel", title: "Kartoffel" },
        { name: "tomate", title: "Tomate" },
        { name: "gurke", title: "Gurke" },
        { name: "zwiebel", title: "Zwiebel" },
        { name: "paprika", title: "Paprika" },
        { name: "salat", title: "Salat" },
        { name: "dressing", title: "Dressing" },
        { name: "fleisch", title: "Fleisch" },
        { name: "name", title: "Name" },
    ];

    // State für die Eingaben & Fehler
    const [formData, setFormData] = useState({});

    // Überprüfung, ob alle Felder ausgefüllt sind
    const isFormValid = fields.every(field => formData[field.name] && formData[field.name] !== "");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            // Formularverarbeitung hier
            console.log("Form submitted:", formData);
        } else {
            setError("Bitte füllen Sie alle Felder aus.");
        }
    }

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {fields.map((field) => (
                <label key={field.name} className="text-lg font-semibold text-gray-700">
                    {field.title}
                    <input
                        type="text"
                        name={field.name}
                        placeholder="MHD"
                        className="py-3 p-2 border rounded w-full mb-2"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name={field.name}
                        placeholder="Chargennummer"
                        className="py-3 p-2 border rounded w-full"
                        onChange={handleChange}
                    />
                </label>
            ))}

            <button
                type="submit"
                className={`px-4 py-2 text-white rounded-lg transition ${isFormValid ? "bg-amber-300 hover:bg-amber-400" : "bg-gray-400 cursor-not-allowed"}`}
                disabled={!isFormValid}
            >
                Speichern
            </button>
        </form>
    );
}
