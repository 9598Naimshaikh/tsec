import React, { useState } from 'react';
import claudImg from "../images/cloud-computing.png";

const UploadModal = ({ isOpen, onClose }) => {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    if (!isOpen) return null;

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        } else {
            setPreview(null);
        }
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-black rounded-lg p-8 shadow-blue-400 shadow-lg min-w-[300px] relative">
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
                    onClick={onClose}
                >
                    &times;
                </button>
                <h2 className="text-xl font-bold mb-4 text-black">Upload Artwork</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="file"
                        accept="image/*"
                        className="mb-4 block bg-blue-400 px-4 py-1"
                        onChange={handleFileChange}
                    />
                    {preview && (
                        <img
                            src={preview}
                            alt="Preview"
                            className="mb-4 max-h-48 rounded border"
                        />
                    )}
                    <input
                        type="text"
                        placeholder="Artwork Name"
                        className="mb-4 block w-full border rounded px-2 py-1 border-blue-400 rounded-md"
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                    <textarea
                        placeholder="Description"
                        className="mb-4 block w-full border px-2 py-1 border-blue-400 rounded-md"
                        value={description}
                        onChange={handleDescriptionChange}
                        required
                    />
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md shadow-blue-400 hover:bg-blue-600">Upload</button>
                </form>
            </div>
        </div>
    );
};

export default UploadModal;
