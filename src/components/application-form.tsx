"use client"

import Image from "next/image"
import { Input } from "./ui/input"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { useState } from "react"
import { API_URL } from "@/assets"


const inputs = [
    {
        name: 'name',
        placeholder: 'Full Name *',
        required: true
    },
    {
        name: 'email',
        placeholder: 'Email *',
        required: true
    },
    {
        name: 'phone',
        placeholder: 'Phone Number *',
        required: true
    },
    {
        name: 'university',
        placeholder: 'University *',
        required: true
    },
    {
        name: 'faculty',
        placeholder: 'Faculty *',
        required: true
    },
    {
        name: 'department',
        placeholder: 'Department *',
        required: true
    },
    {
        name: 'currentYear',
        placeholder: 'Academic Year *',
        required: true
    },
    {
        name: 'gradYear',
        placeholder: 'Graduation Year *',
        required: true
    }
]

const egyptGovernorates = [
    "Cairo",
    "Giza",
    "Alexandria",
    "Qalyubia",
    "Monufia",
    "Beheira",
    "Kafr El Sheikh",
    "Gharbia",
    "Dakahlia",
    "Sharqia",
    "Damietta",
    "Port Said",
    "Ismailia",
    "Suez",
    "North Sinai",
    "South Sinai",
    "Faiyum",
    "Beni Suef",
    "Minya",
    "Asyut",
    "Sohag",
    "Qena",
    "Luxor",
    "Aswan",
    "Red Sea",
    "New Valley",
    "Matrouh"
];


type FormData = {
    [key: string]: string;
};

export default function ApplicationForm() {
    const [formData, setFormdata] = useState<FormData>({
        name: '',
        faculty: '',
        currentYear: '',
        department: '',
        gradYear: '',
        birthDate: '',
        nationality: '',
        governorate: '-',
        committee: ''
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
        key: string,
        value: string
    ) => {
        setFormdata({ ...formData, [key]: value });
    }

    const [error, setError] = useState("");

    interface SubmitResponse {
        success: boolean;
        message?: string;
    }

    interface SubmitEvent extends React.FormEvent<HTMLFormElement> {}

    const handleSubmit = async (e: SubmitEvent): Promise<void> => {
        e.preventDefault();
        if(!Object.values(formData).every(value => value !== '')) {
            setError('Please Fill All The Fields!')
            return
        } 
        const res: Response = await fetch(API_URL + '/api/applicants', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(formData)
        });
        const data: SubmitResponse = await res.json();
        if(data.success){
            alert(data.message)
        } else {
            setError(data.message || '');
        }
    }

    return (
        <div id="join" className="w-11/12 md:w-10/12 mx-auto py-5 md:py-10 flex flex-col md:flex-row gap-5 items-center">
            <motion.div className="max-w-2xl flex flex-col gap-5" initial={{ opacity: 0, x: -20 }} 
                                                whileInView={{ opacity: 1, x: 0 }}>
                <h1 className="text-2xl lg:text-5xl italic">Every Success Needs a <br /> <span className="text-[#d87016] font-bold">Foundation</span> </h1>
                <Image alt="Jouin Us Image" src={'/join-us.png'} width={600} height={600} className="rounded-lg"></Image>
                <h1 className="text-2xl lg:text-5xl italic">Ours Is Built on The Strength of <span className="text-[#d87016] font-bold">Materials and Ideas.</span> </h1>
            </motion.div>
            <motion.div className="flex-1 w-full" initial={{ opacity: 0, x: 20 }} 
                                                    whileInView={{ opacity: 1, x: 0 }}>
                <form className="rounded-lg shadow-xl p-3 md:p-10" onSubmit={handleSubmit}>
                    <h1 className="text-center my-3 text-4xl md:text-5xl italic font-bold">Be an <span className="text-[#d87016]">ESME</span>ian</h1>
                    <div className="flex flex-col gap-5">
                        {inputs.map((input, i) => (
                            <div key={i}>
                                <Input
                                    name={input.name}
                                    placeholder={input.placeholder}
                                    required= {input.required}
                                    className='h-12'
                                    value={formData[input.name] || ''}
                                    onChange={(e) => handleChange(e, input.name, e.target.value)}
                                />
                            </div>
                        ))}
                        <div className="flex gap-5 items-center justify-between">
                            <label htmlFor="birthdate" className="text-nowrap">Birth Date *:</label>
                            <Input type="date" id="birthDate" name="birthdate"
                                    value={formData['birthDate']}
                                    onChange={e => handleChange(e, 'birthDate', e.target.value)}></Input>
                        </div>
                        <select value={formData.nationality} onChange={e => handleChange(e, 'nationality', e.target.value)} name="nationality" id="nationality" className="p-3 w-full border rounded-lg">
                            <option value="">Nationality *</option>
                            <option value="egyptian">Egyptian</option>
                            <option value="other">Other</option>
                        </select> 
                        {formData.nationality === 'egyptian' && (
                            <select value={formData.governorate} onChange={e => handleChange(e, 'governorate', e.target.value)} name="governorate" id="governorate" className="p-3 w-full border rounded-lg">
                            <option value="">Governorate *</option>
                            {egyptGovernorates.map((gov, i)=> (
                                <option value={gov} key={i}>{gov}</option>
                            ))}
                        </select>
                        )}
                        <select value={formData.committee} onChange={e => handleChange(e, 'committee', e.target.value)} name="committee" id="committee" className="p-3 w-full border rounded-lg">
                            <option value="">Committee *</option>
                            <option value="technical">Technical</option>
                            <option value="hr">HR</option>
                            <option value="marketing">Marketing</option>
                            <option value="it">IT</option>
                        </select>
                        {error && <p className="text-red-500 text-xl rounded-lg text-center px-3 my-3">{error}*</p>}
                        <Button type="submit" className="w-full h-12 bg-[#F58220] hover:bg-[#D87016] text-white font-semibold"> Start The Journy! </Button>
                    </div>
                </form>
            </motion.div>
        </div>
    )
}