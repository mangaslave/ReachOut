"use client"

import React, { useState } from 'react';
import { EmployerSidebar } from '@/components/client/EmployerSidebar';
import { ApplicationModal } from './EmployerApplicationModal';
import { ChevronDown } from 'lucide-react';

interface userProps {
  activeUser: {
    name: string;
    email: string;
    image: string;
  };
}

type Status = 'interviewing' | 'new' | 'hired';

interface Employee {
  id: number;
  name: string;
  position: string;
  type: string;
  status: Status;
}

export function PotentialEmployeesClient({ activeUser }: userProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [employees, setEmployees] = useState<Employee[]>([
    { id: 1, name: 'John Wick', position: 'Assistant Manager', type: 'Full-Time', status: 'interviewing' },
    { id: 2, name: 'John Wick', position: 'Assistant Manager', type: 'Part-Time', status: 'new' },
    { id: 3, name: 'John Wick', position: 'Assistant Manager', type: 'Full-Time', status: 'hired' },
  ]);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const statusConfig = {
    interviewing: { label: 'Interviewing', dotColor: 'bg-yellow-400' },
    new: { label: 'NEW!', dotColor: 'bg-red-500' },
    hired: { label: 'Hired', dotColor: 'bg-green-500' }
  };

  const handleStatusChange = (employeeId: number, newStatus: Status) => {
    setEmployees(employees.map(emp => 
      emp.id === employeeId ? { ...emp, status: newStatus } : emp
    ));
    setActiveDropdown(null);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <EmployerSidebar user={activeUser} />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 overflow-y-auto pt-20 px-2 sm:px-2 lg:px-4">
          <div className="max-w-7xl mx-1">
            <div className="mb-8">
              <h1 className="text-xl font-medium text-gray-900 mb-1">Potential Employees</h1>
              <p className="text-sm text-gray-500 mb-1">View a curated list of potential candidates for your open positions</p>
              <div className="border-t border-gray-200 my-4"></div>
              
              <h2 className="text-sm font-medium text-gray-900 mb-1">Employee Matches</h2>
              <p className="text-xs text-gray-500">List of best candidates matched to your job openings</p>
            </div>

            <div>
              <table className="min-w-full divide-y divide-gray-200 bg-white">
                <thead className="bg-teal-700">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-white">Name</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-white">Position</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-white">Type</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-white">Status</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-white"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {employees.map((employee) => (
                    <tr key={employee.id}>
                      <td className="px-4 py-4 text-sm text-gray-900">{employee.name}</td>
                      <td className="px-4 py-4 text-sm text-gray-900">{employee.position}</td>
                      <td className="px-4 py-4 text-sm text-gray-900">{employee.type}</td>
                      <td className="px-4 py-4">
                        <div className="relative">
                          <button 
                            className="w-40 px-3 py-1.5 bg-white border border-gray-200 rounded-full flex items-center justify-between hover:bg-gray-50"
                            onClick={() => setActiveDropdown(activeDropdown === employee.id ? null : employee.id)}
                          >
                            <div className="flex items-center space-x-2">
                              <div className={`w-2 h-2 rounded-full ${statusConfig[employee.status].dotColor}`} />
                              <span className="text-sm text-gray-700">{statusConfig[employee.status].label}</span>
                            </div>
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                          </button>

                          {activeDropdown === employee.id && (
                            <div className="absolute left-0 mt-1 w-40 rounded-lg bg-white shadow-lg border border-gray-200 z-10">
                              {Object.entries(statusConfig).map(([status, config]) => (
                                <button
                                  key={status}
                                  className="w-full px-3 py-2 text-left hover:bg-gray-50 flex items-center space-x-2"
                                  onClick={() => handleStatusChange(employee.id, status as Status)}
                                >
                                  <div className={`w-2 h-2 rounded-full ${config.dotColor}`} />
                                  <span className="text-sm text-gray-700">{config.label}</span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </td>
                      <td 
                        className="px-4 py-4 text-sm text-blue-600 cursor-pointer hover:underline"
                        onClick={() => setModalOpen(true)}
                      >
                        View full application
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
      <ApplicationModal isOpen={modalOpen} setOpen={setModalOpen} />
    </div>
  );
}