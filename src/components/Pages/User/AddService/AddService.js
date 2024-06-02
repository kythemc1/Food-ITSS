import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AddService = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const imageURL = form.imageURL.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const website = form.website.value;
        const specialties = form.specialties.value;
        const history = form.history.value;

        const data = {
            title : title,
            image_url: imageURL,
            location: location,
            website: website,
            phone: phone,
            details: {
                specialties: specialties,
                history: history
            }
        }
        fetch('http://localhost:5000/services/', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            toast.success('Service added successfully');
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }


    return (
        <div className="card flex-shrink-0 w-full mx-auto shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body form pb-5">
                <h2 className='font-semibold mb-4 ml-1'>Add a Service</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text" name='title' placeholder="Enter the restaurant Name" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Image</span>
                    </label>
                    <input type="text" name='imageURL' placeholder="Enter service image url" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Amenities</span>
                    </label>
                    <div className='flex'>
                        <div className='flex items-center mr-4'>
                            <input type="checkbox" name='delivery' className="checkbox" value="Offers Delivery"/>
                            <label className='label'>Offer Delivery</label>
                        </div>
                        <div className='flex items-center'>
                            <input type="checkbox" name='takeout' className="checkbox" value="Offers Takeout"/>
                            <label className='label'>Offer Takeout</label>
                        </div>
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text" name='location' placeholder="Enter Full Address" className="input input-bordered"/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input type="text" name='phone' placeholder="Contact number" className="input input-bordered"/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Website</span>
                    </label>
                    <input type="text" name='website' placeholder="Website url" className="input input-bordered"/>
                </div>
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Service Details</span>
                    </label>
                    <textarea className="textarea textarea-bordered" name='specialties' placeholder="Write your service Specialties"></textarea> <br />
                    <textarea className="textarea textarea-bordered" name='history' placeholder="Write your service History"></textarea>
                </div>
                <div className="form-control mt-4">
                    <input type="submit" className='btn' value="Add Service" />
                </div>
            </form>
        </div>
    );
};

export default AddService;