angular.module 'blackfire'
  .directive 'appFooter', ->

    footerController = ($rootScope, $scope) ->
      'ngInject'
      ft = this
      ft.devices = [
        {
          image: 'assets/images/icon-mobile.png'
          title: 'Mobile'
        }
        {
          image: 'assets/images/icon-speaker.png'
          title: 'Speakers'
        }
        {
          image: 'assets/images/icon-tv.png'
          title: 'TV'
        }
        {
          image: 'assets/images/icon-tablet.png'
          title: 'Tablet'
        }
        {
          image: 'assets/images/icon-thermostat.png'
          title: 'Thermostat'
        }
        {
          image: 'assets/images/icon-router.png'
          title: 'Router'
        }
        {
          image: 'assets/images/icon-earphone.png'
          title: 'Ear Phone'
        }
        {
          image: 'assets/images/icon-smarthome.png'
          title: 'Smart Home'
        }
      ]
      ft.techs = [
        {
          image: 'assets/images/icon-blackfire.png'
        }
        {
          image: 'assets/images/icon-wifi.png'
        }
        {
          image: 'assets/images/icon-android.png'
        }
        {
          image: 'assets/images/icon-apple.png'
        }
      ]
      ft.otherMenus = [
        {
          state: 'home'
          title: 'Terms of Use'
        }
        {
          state: 'home'
          title: 'Privacy Policy'
        }
        {
          state: 'home'
          title: 'SiteMap'
        }
      ]
      ft.menus = [
        {
          title: 'BlackFire'
          items: [
            {
              state: 'home'
              title: 'Overview'
            }
            {
              state: 'home'
              title: 'Advantage'
            }
            {
              state: 'home'
              title: 'Support'
            }
          ]
        }
        {
          title: 'SiteMap'
          items: [
            {
              state: 'home'
              title: 'Home'
            }
            {
              state: 'company'
              title: 'About Us'
            }
            {
              state: 'home'
              title: 'Audio and Video'
            }
            {
              state: 'home'
              title: 'Connected home'
            }
            {
              state: 'company'
              title: 'Company'
            }
            {
              state: 'solution'
              title: 'Solution'
            }
            {
              state: 'home'
              title: 'Industry'
            }
            {
              state: 'home'
              title: 'Partners'
            }
            {
              state: 'home'
              title: 'Contact'
            }
          ]
        }
        {
          title: 'Careers'
          items: [
            {
              state: 'home'
              title: 'Become a partner'
            }
            {
              state: 'home'
              title: 'Partners Information'
            }
            {
              state: 'home'
              title: 'Partner List'
            }
          ]
        }
        {
          title: 'QIContact Form'
          items: [
            {
              state: 'home'
              title: 'Terms of Use'
            }
            {
              state: 'home'
              title: 'Privacy Policy'
            }
            {
              state: 'home'
              title: 'Sitemap'
            }
            {
              state: 'home'
              title: 'Careers'
            }
          ]
        }
      ]

      ft.socials = [
        {
          href: ''
          image: 'assets/images/icon-twitter.png'
        }
        {
          href: ''
          image: 'assets/images/icon-facebook.png'
        }
        {
          href: ''
          image: 'assets/images/icon-linkedin.png'
        }
        {
          href: ''
          image: 'assets/images/icon-youtube.png'
        }
        {
          href: ''
          image: 'assets/images/icon-googleplus.png'
        }
        {
          href: ''
          image: 'assets/images/icon-instagram.png'
        }
        {
          href: ''
          image: 'assets/images/icon-t.png'
        }
      ]

      ft.about = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Fusce tincidunt tristique nunc ut lacinia. Integer tempus nisl et dolor malesuada, sit amet interdum ipsum posuere.'

      return

    directive =
      restrict: 'A'
      templateUrl: 'app/components/footer/footer.html'
      controller: footerController
      controllerAs: 'ft'
      bindToController: true
