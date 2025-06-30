import { Podcast } from '@/types/types';
import React, { useState } from 'react';

interface AddPodcastButtonProps {
  onAddPodcast: (podcast: Podcast) => void; // Define prop type for onAddPodcast function
}

const AddPodcastButton: React.FC<AddPodcastButtonProps> = ({ onAddPodcast }) => {
  const [showInputs, setShowInputs] = useState(false);
  const [topic, setTopic] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [link, setLink] = useState('');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // You can set the image URL or do whatever you want with the uploaded image here
        const imageUrl = reader.result;
        setImage(imageUrl as string); // Assuming imageUrl is always a string
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleInputs = () => {
    setShowInputs(prevState => !prevState);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Check if any of the required fields are empty
    if (!topic || !title || !description) {
      alert('Please fill out all required fields: Topic, Title, and Description');
      return;
    }
    const newPodcast: Podcast = {
      id: Date.now(),
      topic,
      title,
      description,
      image,
      link,
    };
    onAddPodcast(newPodcast);
    setTopic('');
    setTitle('');
    setDescription('');
    setImage('');
    setLink('');
    setShowInputs(false); // Hide the inputs after submission
  };

  return (
    <div>
      <button className="bg-green-500 text-white py-2 px-4 rounded" onClick={toggleInputs}>
        {showInputs ? 'Hide Inputs' : 'Add Podcast'}
      </button>
      {showInputs && (
        <div>
          <br />
          <form onSubmit={handleSubmit}>
            <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="Topic" />
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
            <input type="file" onChange={handleImageUpload} accept="image/*" />
            <input type="text" value={link} onChange={(e) => setLink(e.target.value)} placeholder="Podcast Link (optional)" />
            <button className="bg-green-500 text-white py-2 px-4 rounded" type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddPodcastButton;
