const BillingInformation = () => {
  return (
    <section className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4 div-text">
        Billing Information
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-gray-600 div-text">
            Legal Business Name
          </label>
          <input
            type="text"
            placeholder="Business Name"
            className="input-field"
          />
        </div>
        <div>
          <label className="text-sm text-gray-600 div-text">
            Country/Region
          </label>
          <select className="input-field">
            <option>United States</option>
          </select>
        </div>
        <div className="col-span-2">
          <label className="text-sm text-gray-600 div-text">Address</label>
          <input type="text" placeholder="Address" className="input-field" />
        </div>
        <div>
          <label className="text-sm text-gray-600 div-text">
            Apartment, Suite, etc.
          </label>
          <input
            type="text"
            placeholder="Apartment, Suite, etc."
            className="input-field"
          />
        </div>
        <div>
          <label className="text-sm text-gray-600 div-text">City</label>
          <input type="text" placeholder="City" className="input-field" />
        </div>
        <div>
          <label className="text-sm text-gray-600 div-text">State</label>
          <input type="text" placeholder="State" className="input-field" />
        </div>
        <div>
          <label className="text-sm text-gray-600 div-text">PIN Code</label>
          <input type="text" placeholder="PIN Code" className="input-field" />
        </div>
      </div>
    </section>
  );
};

export default BillingInformation;
