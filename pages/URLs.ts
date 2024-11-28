import { type Page, type Locator, expect } from "@playwright/test";


export  class URLs {
    readonly page: Page;
    readonly page_header: Locator;
    readonly reserve_title: Locator;
    readonly parking_lot: Locator;
    readonly entry_date: Locator;
    readonly entry_time: Locator;
    readonly exit_date: Locator;
    readonly exit_time: Locator;
    readonly calc_cost_button: Locator;
    readonly book_button: Locator;
    readonly parking_lot_list: Locator; // the actual drop down list of parking lots
    readonly entry_date_field: Locator; // the actual date that parking charge starts
    readonly entry_time_field: Locator; // the actual time that parking charge starts
    readonly exit_date_field: Locator; // the actual date that parking charge ends
    readonly exit_time_field: Locator; // the actual time that parking charge ends
    readonly valetparking : Locator; // the actual drop down list item

    


constructor(page:Page){
    this.page = page;
    this.page_header = page.getByRole('heading', { name: 'Parking Cost Calculator App' });
    this.reserve_title = page.getByRole('heading', { name: 'Reservation details' });
    this.parking_lot = page.locator('#reservationDetailsForm > div.form-group > label');
    this.entry_date = page.getByText('Entry Date');
    this.entry_time = page.getByText('Entry Time');
    this.exit_date = page.getByText('Exit Date');
    this.exit_time = page.getByText('Exit Time');
    this.calc_cost_button = page.getByTestId('calculate-cost'); // Button to calculate cost
    this.parking_lot_list = page.locator('#parkingLot'); // the actual drop down list of parking lots
    this.entry_date_field = page.getByPlaceholder('Entry Date'); // the actual date that parking charge starts
    this.entry_time_field = page.getByPlaceholder('Entry Time'); // the actual time that parking charge starts
    this.exit_date_field = page.getByPlaceholder('Exit Date'); // the actual date that parking charge ends
    this.exit_time_field = page.getByPlaceholder('Exit Time'); // the actual time that parking charge ends
    this.valetparking = page.locator('#parkingLot > option:nth-child(1)'); // the actual drop down list item


}

async gotoLoginPage() {
        await this.page.goto("https://practice.expandtesting.com/webpark"); // Navigate to the calculator page
}

// Check if the labels are present and visible
async labelCheck() { 
    await expect(this.page_header).toHaveText('Parking Cost Calculator App - Practice Test Automation');
    await expect(this.page_header).toBeVisible
    await expect(this.reserve_title).toHaveText('Reservation details');
    await expect(this.reserve_title).toBeVisible
    await expect(this.parking_lot).toHaveText('Choose a Parking Lot');
    await expect(this.parking_lot).toBeVisible
    await expect(this.parking_lot).toContainText//
    await expect(this.entry_date).toHaveText('Entry Date');
    await expect(this.entry_date).toBeVisible
    await expect(this.entry_time).toHaveText('Entry Time');
    await expect(this.entry_time).toBeVisible
    await expect(this.exit_date).toHaveText('Exit Date');
    await expect(this.exit_date).toBeVisible
    await expect(this.exit_time).toHaveText('Exit Time');
    await expect(this.exit_time).toBeVisible
    await expect(this.calc_cost_button).toHaveText('Calculate Cost');
    await expect(this.calc_cost_button).toBeVisible
    await expect(this.calc_cost_button).toBeEnabled
}

async defaultFieldValues(){
    await expect (this.valetparking).toHaveText( 'Valet Parking' );
    await expect (this.entry_date_field).toHaveValue( '2024-11-28' );
    await expect(this.exit_date_field).toHaveValue( '2024-11-29' );

}


};


