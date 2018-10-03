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
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('Each allFeeds object has a URL defined and not empty', function(){
           allFeeds.forEach(function(feed) {
             expect(feed.url).toBeDefined();
             expect(feed.url.length).not.toBe(0);
           });
         });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('Each allFeeds object has a name defined and not empty', function(){
           allFeeds.forEach(function(feed) {
             expect(feed.name).toBeDefined();
             expect(feed.name.length).not.toBe(0);
           });
         });
    });


    /* The menu test suite */
    describe('The menu', function() {
        /* A test that ensures the menu element is
         * hidden by default by checking to see if the boday has the "menu-hidden" class.
         */
         it('is hidden by default', function(){
           expect($('body').hasClass("menu-hidden")).toBe(true);
         });

         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('display when clicked  and hide when clicked again', function(){
            var menuIcon = $('.menu-icon-link');
            //the menu display when clicked
            menuIcon.click();
            expect($('body').hasClass("menu-hidden")).toBe(false);

            //the menu hide when clicked again
            menuIcon.click();
            expect($('body').hasClass("menu-hidden")).toBe(true);
          });
      });




    /* The "Initial Entries" test suite */

    describe('Initial Entries', function() {
      /* A test that ensures when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.
       */

       //Making sure that the loadFeed function is completed at least once before running the test
      beforeEach(function(done) {
        loadFeed(0,done);
        });

        //Checking to see if there is at least one entry in the feed
      it('There is at least one entry when the loadFeed function is completed',function(){
        expect($('.feed .entry').length).toBeGreaterThan(0);
      });

    });

    /* The "New Feed Selection" test suite */
    describe('New Feed Selection', function() {
      var firstFeed,
          secondFeed;
        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */

         //Making sure 2 feeds are loaded before we test
         beforeEach(function(done){
           loadFeed(0, function(){
             firstFeed =$('.feed').html();
             done();
           });
           loadFeed(1, function(){
             secondFeed =$('.feed').html();
             done();
           });
         });

         //Checking to see if the the old feed and the new feed are the same (if the feed changes, they shouldn't be)
         it('When a new feed is loaded, the content changes',function(){
           expect(firstFeed===secondFeed).toBe(false);
         });


       });

}());
