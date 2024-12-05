"use client";

export default function AccessibilitySettings() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-6">
      {/* Language Section */}
      <section className="p-4 flex flex-col gap-4 rounded bg-white shadow">
        <h2 className="text-lg font-medium text-gray-900">Language</h2>
        <p className="text-sm text-gray-600">Select your preferred displayed language.</p>
        <select className="mt-2 block w-full h-10 p-2 rounded-md shadow-sm border border-black">
          <option>Select a language</option>
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
        </select>
      </section>

      {/* Accessibility Tools Section */}
      <section className="p-4 flex flex-col gap-4 rounded bg-white shadow">
        <h2 className="text-lg font-medium text-gray-900">Accessibility Tools</h2>
        <p className="text-sm text-gray-600">Tools to enhance usability and support diverse needs.</p>
        {["Text-to-Speech", "Speech Recognition", "Keyboard Navigation"].map((tool, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-sm text-gray-700">{tool}</span>
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-caribbeanCurrant rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-black after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-caribbeanCurrant"></div>
            </label>
          </div>
        ))}
      </section>

      {/* Display Section */}
      <section className="p-4 flex flex-col gap-4 rounded bg-white shadow">
        <h2 className="text-lg font-medium text-gray-900">Display</h2>
        <p className="text-sm text-gray-600">Adjust the appearance of your text.</p>
        <div className="flex items-center gap-4">
          <label className="text-sm text-gray-600">Text Size</label>
          <input type="range" min="10" max="30" className="flex-1 accent-caribbeanCurrant" />
        </div>
        <select className="mt-2 block w-full p-2 rounded-md border border-black shadow-sm h-10">
          <option>Select Text Style</option>
          <option>Serif</option>
          <option>Sans-Serif</option>
          <option>Monospace</option>
        </select>
      </section>

      {/* Themes Section */}
      <section className="p-4 flex flex-col gap-4 rounded bg-white shadow">
        <h2 className="text-lg font-medium text-gray-900">Themes</h2>
        <p className="text-sm text-gray-600">Customize the look of your interface.</p>
        {["Dark Mode", "High-Contrast"].map((theme, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-sm text-gray-700">{theme}</span>
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-caribbeanCurrant rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-black after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-caribbeanCurrant"></div>
            </label>
          </div>
        ))}
      </section>
    </div>
  );
}
