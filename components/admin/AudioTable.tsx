import React from 'react'

const AudioTable: React.FC = () => {
  const people = [
    {
      name: 'Jane Cooper',
      title: 'Regional Paradigm Technician',
      department: 'Optimization',
      role: 'Admin',
      email: 'jane.cooper@example.com',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
    }
  ]

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-indigo-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Audio Type
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Title
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            description
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Image URL
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            tags
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            slugs
          </th>
          <th scope="col" className="relative px-6 py-3">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {people.map((person) => (
          <tr key={person.email}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Music</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">El Bimbo</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Pilipino Songs from smooth sweet side
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              https://image/com/255/255/impower.jpg
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              the power of now, this is me now,{' '}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">el-bimbo</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default AudioTable
