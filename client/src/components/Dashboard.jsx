import React from 'react'

export default function Dashboard() {
  return (
    <div>
<div className="container">
  <>
  {ContactCard()}
  </>
  
</div>
    </div>
  )
}




// function transactionsComponent() {
//   return (
//     <div className="container">
// <h1>hello</h1>
//     </div>
//   )
// }

const contacts = [
  {
    name: 'Jane Cooper',
    role: 'Regional Paradigm Technician',
    imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'Cody Fisher',
    role: 'Product Directives Officer',
    imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    name: 'Esther Howard',
    role: 'Forward Response Developer',
    imageUrl: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    name: 'Jenny Wilson',
    role: 'Central Security Manager',
    imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    name: 'Kristin Watson',
    role: 'Lead Implementation Liaison',
    imageUrl: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
  {
    name: 'Cameron Williamson',
    role: 'Internal Applications Engineer',
    imageUrl: 'https://randomuser.me/api/portraits/men/6.jpg',
  },
];

 function ContactCard() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contacts.map((contact, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center">
              <img
                className="w-16 h-16 rounded-full mr-4"
                src={contact.imageUrl}
                alt={contact.name}
              />
              <div>
                <h2 className="text-lg font-bold">{contact.name}</h2>
                <p className="text-sm text-gray-600">{contact.role}</p>
              </div>
            </div>
            <div className="flex justify-around mt-4">
              <button className="flex items-center text-blue-500">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 8a3 3 0 0 0-5.657-1.657l-1.061 1.061a1 1 0 0 1-1.414 0L10.293 5.05a1 1 0 0 1 0-1.415L11.354 2.97A3 3 0 1 0 8.97.586L7.908 1.647a1 1 0 0 1-1.414 0L4.05 2.708a1 1 0 0 1 0-1.414L5.111.647A3 3 0 0 0 2.697 3.06l1.061 1.061a1 1 0 0 1 0 1.414l-1.06 1.061A3 3 0 0 0 5.111 10.97l1.061-1.061a1 1 0 0 1 1.414 0l1.06 1.061a1 1 0 0 1 0 1.414L8.97 14.293a3 3 0 0 0 1.414 5.657h1.415a3 3 0 0 0 1.414-5.657l-1.061-1.061a1 1 0 0 1 0-1.414l1.061-1.06a1 1 0 0 1 1.414 0l1.06 1.06A3 3 0 0 0 21 8zm-4.5 12a1.5 1.5 0 1 1-1.415-1.415 1.5 1.5 0 0 1 1.415 1.415zm4.5-4.5a1.5 1.5 0 1 1-1.415-1.415 1.5 1.5 0 0 1 1.415 1.415zM15 2a1.5 1.5 0 1 1-1.415-1.415A1.5 1.5 0 0 1 15 2z" />
                </svg>
                Email
              </button>
              <button className="flex items-center text-blue-500">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 6.4v.54a17.94 17.94 0 0 1-1.231 7.234 17.95 17.95 0 0 1-4.173 6.123 17.95 17.95 0 0 1-6.123 4.173 17.94 17.94 0 0 1-7.234 1.231H6.4A2.4 2.4 0 0 1 4 21.6V18a2.4 2.4 0 0 1 2.4-2.4h.54a17.94 17.94 0 0 1 7.234-1.231 17.95 17.95 0 0 1 6.123 4.173 17.95 17.95 0 0 1 4.173 6.123A17.94 17.94 0 0 1 21.6 18h.54A2.4 2.4 0 0 1 24 15.6V6.4A2.4 2.4 0 0 1 21.6 4H18a2.4 2.4 0 0 1-2.4-2.4v-.54A2.4 2.4 0 0 1 18 0h3.6A2.4 2.4 0 0 1 24 2.4V6.4z" />
                </svg>
                Call
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
