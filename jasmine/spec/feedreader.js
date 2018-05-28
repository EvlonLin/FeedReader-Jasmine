/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('Feeds are defined', function() {
            //to check if allFeeds is created
            expect(allFeeds).toBeDefined();
            //to check allFeeds is not an empty array
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('urls are defined', function() {
            for (i = 0; i < allFeeds.length; i++){
                //to check each object in allFeeds has url
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('names are defined', function() {
            for (i = 0; i < allFeeds.length; i++){
                //to check each object in allFeeds has name
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

    describe('The menu', function() {
        //check whether 'menu-hidden' class is included in body tag.
        it('menu is hidden', function() {
            expect(document.getElementsByTagName('body')[0].className).toBe('menu-hidden');
        });
        var menuOpen = document.getElementsByTagName('body')[0].classList;
        //open the menu twice to see if the menu are properly hidden and shown.
        it('menu changes visibility', function() {
            document.getElementsByClassName('menu-icon-link')[0].click();
            expect(menuOpen.contains('menu-hidden')).toBe(false);
            document.getElementsByClassName('menu-icon-link')[0].click();
            expect(menuOpen.contains('menu-hidden')).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    describe('Initial Entries', function() {
        //make sure the loadFeed function is called
        beforeEach(function(done) {
            loadFeed(0,function(){
                done();
            });
        });
        //make sure the loadFeed function created any entry
        var numEntry = document.getElementsByClassName('feed')[0].children;
        it('should have entry element', function() {
            expect(numEntry.length>0).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

    describe('New Feed Selection', function() {
        //load the different page by call the function twice.
        var text1;
        var text2;
        beforeEach(function(done) {
            loadFeed(0,function(){
                text1 = document.getElementsByClassName('feed')[0].innerText;
                done();
            });
            loadFeed(1,function(){
                text2 = document.getElementsByClassName('feed')[0].innerText;
                done();
            });
        });
        //compare the inner HTML text to make sure the content actually changed
        it('should have different feed', function() {
            expect(text1).not.toBe(text2);
        });
    });
}());
