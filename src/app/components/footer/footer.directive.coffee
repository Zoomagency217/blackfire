angular.module 'blackfire'
  .directive 'appFooter', ->

    footerController = ($rootScope, $scope) ->
      'ngInject'
      ft = this
      ft.devices = [
        {
          image: 'assets/icon-mobile.png'
          title: 'Mobile'
        }
        {
          image: 'assets/icon-speaker.png'
          title: 'Speakers'
        }
        {
          image: 'assets/icon-tv.png'
          title: 'TV'
        }
        {
          image: 'assets/icon-tablet.png'
          title: 'Tablet'
        }
        {
          image: 'assets/icon-thermostat.png'
          title: 'Thermostat'
        }
        {
          image: 'assets/icon-router.png'
          title: 'Router'
        }
        {
          image: 'assets/icon-earphone.png'
          title: 'Ear Phone'
        }
        {
          image: 'assets/icon-smarthome.png'
          title: 'Smart Home'
        }
      ]
      ft.techs = [
        {
          image: 'assets/icon-blackfire.png'
        }
        {
          image: 'assets/icon-wifi.png'
        }
        {
          image: 'assets/icon-android.png'
        }
        {
          image: 'assets/icon-apple.png'
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
              state: 'home'
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
              state: 'home'
              title: 'Company'
            }
            {
              state: 'home'
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
          image: 'assets/icon-twitter.png'
        }
        {
          href: ''
          image: 'assets/icon-facebook.png'
        }
        {
          href: ''
          image: 'assets/icon-linkedin.png'
        }
        {
          href: ''
          image: 'assets/icon-youtube.png'
        }
        {
          href: ''
          image: 'assets/icon-googleplus.png'
        }
        {
          href: ''
          image: 'assets/icon-instagram.png'
        }
        {
          href: ''
          image: 'assets/icon-t.png'
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
