"use client";

export default function AddNewClientModal({
  message,
  status,
  onClose,
}: {
  message: string;
  status: string;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h3 className="text-lg font-semibold mb-4">{status}</h3>
        <p>{message}</p>
        <div className="flex justify-end mt-4">
          <button onClick={onClose} className="bg-blue-600 text-white py-2 px-4 rounded">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
