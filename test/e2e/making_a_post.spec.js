describe('making a post', function () {
	it('log in and creates a PROJECT', function () {
		browser.get('http://localhost:3000')

		browser.sleep(2000);

		//Simulate login clicked
		element(by.css('.login')).click()

		browser.sleep(2000);

		//Complete and submit login form
		element(by.model('username')).sendKeys('q')
		element(by.model('password')).sendKeys('q')
		element(by.css('form .submit')).click()

		browser.sleep(1000);

		//Simulate login clicked
		element(by.css('.posts')).click()

		browser.sleep(1000);

		//Fill in form data and submit

		//1.0 General Details
		element(by.model('postBody')).sendKeys('Protracror Test')
		element(by.model('postfileRef')).sendKeys('Reference: 5674')
		element(by.model('postprefix')).sendKeys('Mr')
		element(by.model('postfirstName')).sendKeys('John')
		element(by.model('postlastName')).sendKeys('Smith')
		element(by.model('postaddress')).sendKeys('This Street')
		element(by.model('posttownland')).sendKeys('This Townland')
		element(by.model('postphone')).sendKeys('353 98725228')
		element(by.model('postfax')).sendKeys('353 98725227')
		element(by.model('postemail')).sendKeys('john@smith.com')
		element(by.model('postnoResidents')).sendKeys('4')
		element(by.model('postnoDoubleBeds')).sendKeys('1')
		element(by.model('postnoSingleBeds')).sendKeys('3')
		element(by.model('postwaterSupply')).sendKeys('On site well')

		//2.0 General Details Cont
		element(by.model('soilType')).sendKeys('Sandy Gravel')
		element(by.model('aquifer')).sendKeys('isolated')
		element(by.model('vulnerability')).sendKeys('high')
		element(by.model('bedrockType')).sendKeys('Sand Stone')
		element(by.model('waterScheme')).sendKeys('None')
		element(by.model('gwProtection')).sendKeys('None')
		element(by.model('sourceProtection')).sendKeys('None')
		element(by.model('gwResponse')).sendKeys('low')
		element(by.model('sigSites')).sendKeys('None within 1KM')
		element(by.model('pastExp')).sendKeys('None')
		element(by.model('comments1')).sendKeys('nothing specific to note')
		

		//3.0 ON-SITE ASSESSMENT

		//3.1 VISUAL ASSESSMENT

		element(by.model('landscapePos')).sendKeys('North to South')
		element(by.model('slope')).sendKeys('1 in 50')
		element(by.model('houses')).sendKeys('None')
		element(by.model('existingLandUse')).sendKeys('Agricultural')
		element(by.model('vegitation')).sendKeys('High')
		element(by.model('gwFlow')).sendKeys('North to South')
		element(by.model('groundCond')).sendKeys('Good')
		element(by.model('siteBound')).sendKeys('Roadway to north, fields surrounding')
		element(by.model('roads')).sendKeys('Regional road to North')
		element(by.model('outcrops')).sendKeys('Yes')
		element(by.model('ponding')).sendKeys('None')
		element(by.model('lakes')).sendKeys('None')
		element(by.model('beaches')).sendKeys('None')
		element(by.model('wetlands')).sendKeys('None')
		element(by.model('karst')).sendKeys('None')
		element(by.model('watercourse')).sendKeys('Yes North to South')
		element(by.model('springs')).sendKeys('None')
		element(by.model('comments2')).sendKeys('Nothing specific')

		//3.2 TRIAL HOLE EVALUATION

		element(by.model('comments3')).sendKeys('Nothing specific')


		//3.3 PRE-SOAK T-TEST

		element(by.model('test1date')).sendKeys('11/05/2015')
		element(by.model('test1time')).sendKeys('16:20')
		element(by.model('test2date')).sendKeys('11/05/2015')
		element(by.model('test2time')).sendKeys('16:30')
		element(by.model('test3date')).sendKeys('11/05/2015')
		element(by.model('test3time')).sendKeys('16:40')

		//3.4 PERCOLATION TEST

		element(by.model('test111')).sendKeys('16:45')
		element(by.model('test112')).sendKeys('16:50')
		element(by.model('avg111')).sendKeys('Average 1')


		element(by.model('test121')).sendKeys('16:45')
		element(by.model('test122')).sendKeys('16:53')
		element(by.model('avg121')).sendKeys('Average 2')

		element(by.model('test131')).sendKeys('16:50')
		element(by.model('test132')).sendKeys('17:53')
		element(by.model('avg131')).sendKeys('Average 3')

		element(by.model('test211')).sendKeys('16:45')
		element(by.model('test212')).sendKeys('16:50')
		element(by.model('avg211')).sendKeys('Average 4')


		element(by.model('test221')).sendKeys('16:45')
		element(by.model('test222')).sendKeys('16:53')
		element(by.model('avg221')).sendKeys('Average 5')

		element(by.model('test231')).sendKeys('16:50')
		element(by.model('test232')).sendKeys('17:53')
		element(by.model('avg231')).sendKeys('Average 6')

		element(by.model('test311')).sendKeys('16:45')
		element(by.model('test312')).sendKeys('16:50')
		element(by.model('avg311')).sendKeys('Average 7')


		element(by.model('test321')).sendKeys('16:45')
		element(by.model('test322')).sendKeys('16:53')
		element(by.model('avg321')).sendKeys('Average 8')

		element(by.model('test331')).sendKeys('16:50')
		element(by.model('test332')).sendKeys('17:53')
		element(by.model('avg331')).sendKeys('Average 9')

		element(by.model('comments4')).sendKeys('Nothing specific')

		//3.5 PRE-SOAK P-TEST

		element(by.model('ptest1date')).sendKeys('11/05/2015')
		element(by.model('ptest1time')).sendKeys('16:20')
		element(by.model('ptest2date')).sendKeys('11/05/2015')
		element(by.model('ptest2time')).sendKeys('16:30')
		element(by.model('ptest3date')).sendKeys('11/05/2015')
		element(by.model('ptest3time')).sendKeys('16:40')

		//3.6 PERCOLATION P-TEST

		element(by.model('ptest111')).sendKeys('16:45')
		element(by.model('ptest112')).sendKeys('16:50')
		element(by.model('pavg111')).sendKeys('Average 1')


		element(by.model('ptest121')).sendKeys('16:45')
		element(by.model('ptest122')).sendKeys('16:53')
		element(by.model('pavg121')).sendKeys('Average 2')

		element(by.model('ptest131')).sendKeys('16:50')
		element(by.model('ptest132')).sendKeys('17:53')
		element(by.model('pavg131')).sendKeys('Average 3')

		element(by.model('ptest211')).sendKeys('16:45')
		element(by.model('ptest212')).sendKeys('16:50')
		element(by.model('pavg211')).sendKeys('Average 4')


		element(by.model('ptest221')).sendKeys('16:45')
		element(by.model('ptest222')).sendKeys('16:53')
		element(by.model('pavg221')).sendKeys('Average 5')

		element(by.model('ptest231')).sendKeys('16:50')
		element(by.model('ptest232')).sendKeys('17:53')
		element(by.model('pavg231')).sendKeys('Average 6')

		element(by.model('ptest311')).sendKeys('16:45')
		element(by.model('ptest312')).sendKeys('16:50')
		element(by.model('pavg311')).sendKeys('Average 7')


		element(by.model('ptest321')).sendKeys('16:45')
		element(by.model('ptest322')).sendKeys('16:53')
		element(by.model('pavg321')).sendKeys('Average 8')

		element(by.model('ptest331')).sendKeys('16:50')
		element(by.model('ptest332')).sendKeys('17:53')
		element(by.model('pavg331')).sendKeys('Average 9')

		element(by.model('comments5')).sendKeys('Nothing specific')

		//4.0 CONCLUSIONS

		element(by.model('suitableFor')).sendKeys('Septic Tank')
		element(by.model('secondaryTreat')).sendKeys('Percolation')

		//5,0 RECCOMENDATION
		element(by.model('propInstall')).sendKeys('Packaged septic tank')
		element(by.model('dischargeTo')).sendKeys('Percolation Area')
		element(by.model('trenchInv')).sendKeys('56.550m')


		//6.0 TREATMENT SYSTEM DETAILS
		element(by.model('propInstallTank')).sendKeys('Standard septic tank')
		element(by.model('dischargeToTank')).sendKeys('Percolation area')
		element(by.model('trenchInvTank')).sendKeys('57.550m')
		element(by.model('noTrenches')).sendKeys('4')
		element(by.model('lengthTrenches')).sendKeys('10m')
		element(by.model('invLvlTrench')).sendKeys('57.000')
		element(by.model('moundnoTrenches')).sendKeys('N/A')
		element(by.model('moundlengthTrenches')).sendKeys('N/A')
		element(by.model('moundinvLvlTrench')).sendKeys('N/A')

		//7.0 SITE ASSESSOR DETAILS
		element(by.model('company')).sendKeys('Campany Name')
		element(by.model('experience')).sendKeys('Quaifications')
		element(by.model('insurance')).sendKeys('insurance Details')

		browser.sleep(1000);

		element(by.css('form .submit')).click()

		browser.sleep(1000);

		//Simulate home clicked
		element(by.css('.home')).click()

		browser.sleep(1000);

		//Simulate results clicked
		element(by.css('.results')).click()


		browser.sleep(10000);
		//browser.waitForAngular();
		browser.pause()
		//

	})
	//Uncomment to delete testing database
	//afterEach(function () {
		//db.connection.db.dropDatabase()
	//})
})








