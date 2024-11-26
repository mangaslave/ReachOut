"use client";

import {Button} from "../ui/button";

export default function AccessibilitySettings() {
  return (
    <div className="grid grid-cols-2 grid-rows-3">
      {/* Language Section */}
      <section className="p-4 flex flex-col gap-4">
        <h2 className="text-lg font-medium text-gray-900">Language</h2>
        <p className="text-sm text-gray-600">Select your preferred displayed language.</p>
        <select className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
          <option>Select a language</option>
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
        </select>
      </section>

      {/* Accessibility Tools Section */}
      <section className="p-4  flex flex-col gap-4">
        <h2 className="text-lg font-medium text-gray-900 gap-x-4">Accessibility Tools</h2>
        <p className="text-sm text-gray-600 gap-x-4">Tools to enhance usability and support diverse needs.</p>
        {["Text-to-Speech", "Speech Recognition", "Keyboard Navigation"].map((tool, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-sm text-gray-700">{tool}</span>
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-14 h-8 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-colors">
                <div className="absolute w-6 h-6 bg-white rounded-full shadow-md left-1 top-1 transition-transform peer-checked:translate-x-6"></div>
              </div>
            </label>
          </div>
        ))}
      </section>

      {/* Display Section */}
      <section className="p-4  flex flex-col gap-4">
        <h2 className="text-lg font-medium text-gray-900">Display</h2>
        <p className="text-sm text-gray-600">Adjust the appearance of your text.</p>
        <div className="flex items-center gap-4">
          <label className="text-sm text-gray-600">Text Size</label>
          <input type="range" min="10" max="30" className="flex-1" />
        </div>
        <select className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
          <option>Select Text Style</option>
          <option>Serif</option>
          <option>Sans-Serif</option>
          <option>Monospace</option>
        </select>
      </section>

      <section className="p-4  flex flex-col gap-4"></section>

      {/* Themes Section */}
      <section className="p-4 flex flex-col gap-4">
        <h2 className="text-lg font-medium text-gray-900">Themes</h2>
        <p className="text-sm text-gray-600">Customize the look of your interface.</p>
        {["Dark Mode", "High-Contrast"].map((theme, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-sm text-gray-700">{theme}</span>
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-14 h-8 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-colors">
                <div className="absolute w-6 h-6 bg-white rounded-full shadow-md left-1 top-1 transition-transform peer-checked:translate-x-6"></div>
              </div>
            </label>
          </div>
        ))}
      </section>

      {/* Footer Buttons */}
      <section className="p-4 flex justify-end items-center gap-4">
        <Button className="w-40">Save and Continue</Button>
        <Button variant="ghost" className="w-40 border border-gray-300">
          Go Back
        </Button>
      </section>
    </div>
  );
}
