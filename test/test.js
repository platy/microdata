const microdata = require('microdata')


it('should find Mark Pilgrim', function() {
  document.body.innerHTML = `<section itemscope itemtype="http://data-vocabulary.org/Person">
  <img itemprop="photo" class="me" width="204" height="250" src="http://diveintohtml5.info/examples/2000_05_mark.jpg" alt="[Mark Pilgrim, circa 2000]">
  <h1>Contact Information</h1>
  <dl>
    <dt>Name</dt>
    <dd itemprop="name">Mark Pilgrim</dd>
    <dt>Position</dt>
    <dd>
      <span itemprop="title">Developer advocate</span> for
      <span itemprop="affiliation">Google, Inc.</span>
    </dd>
    <dt>Mailing address</dt>
    <dd itemprop="address" itemscope itemtype="http://data-vocabulary.org/Address">
      <span itemprop="street-address">P.O. Box 562</span>
      <br>
      <span itemprop="locality">Anytown</span>,
      <span itemprop="region">PA</span>
      <span itemprop="postal-code">12345</span>
      <br>
      <span itemprop="country-name">USA</span>
    </dd>
    <dt>Home address</dt>
    <dd itemprop="address" itemscope itemtype="http://data-vocabulary.org/Address">
      <span itemprop="street-address">100 Main Street</span>
      <br>
      <span itemprop="locality">Anytown</span>,
      <span itemprop="region">PA</span>
      <span itemprop="postal-code">19999</span>
      <br>
      <span itemprop="country-name">USA</span>
    </dd>
  </dl>
  <h1>My Digital Footprints</h1>
  <ul>
    <li>
      <a itemprop="url">weblog</a>
    </li>
    <li>
      <a href="http://www.google.com/profiles/pilgrim" itemprop="url">Google profile</a>
    </li>
    <li>
      <a href="http://www.reddit.com/user/MarkPilgrim" itemprop="url">Reddit.com profile</a>
    </li>
    <li>
      <a href="http://www.twitter.com/diveintomark" itemprop="url">Twitter</a>
    </li>
  </ul>
  <a href="http://www.oreillynet.com/pub/au/2385">I also wrote books published by <span itemprop="affiliation">O'Reilly</span></a>
</section>`


  expect(microdata('http://data-vocabulary.org/Person')).toEqual(
    [{ _type: "http://data-vocabulary.org/Person"
     , photo: "http://diveintohtml5.info/examples/2000_05_mark.jpg"
     , name: "Mark Pilgrim"
     , title: "Developer advocate"
     , affiliation: ["Google, Inc.", "O'Reilly"]
     , address: [{ _type: "http://data-vocabulary.org/Address"
                 , "street-address": "P.O. Box 562"
                 , locality: "Anytown"
                 , region: "PA"
                 , "postal-code": "12345"
                 , "country-name": "USA"
                 }
                ,{ _type: "http://data-vocabulary.org/Address"
                 , "street-address": "100 Main Street"
                 , locality: "Anytown"
                 , region: "PA"
                 , "postal-code": "19999"
                 , "country-name": "USA"
                 }
                ]
     , url: ["http://www.google.com/profiles/pilgrim", "http://www.reddit.com/user/MarkPilgrim", "http://www.twitter.com/diveintomark"]
     }])
})
