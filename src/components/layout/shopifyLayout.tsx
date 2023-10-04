import React, { PropsWithChildren, useCallback, useState } from "react"
import {
  ActionList,
  Frame,
  Icon,
  Navigation,
  AppProvider as PolarisProvider,
  TopBar,
} from "@shopify/polaris"
import {
  AnalyticsMinor,
  AppsMinor,
  ChevronRightMinor,
  ContentMinor,
  CustomersMinor,
  DiscountsMinor,
  HomeMinor,
  MarketingMinor,
  NotificationMajor,
  OrdersMinor,
  ProductsMinor,
  StoreMinor,
} from "@shopify/polaris-icons"
import "@shopify/polaris/build/esm/styles.css"
import translations from "@shopify/polaris/locales/en.json"

type Props = {}

const ShopifyLayout = ({ children }: PropsWithChildren<Props>) => {
  const [isSearchActive, setIsSearchActive] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  const handleSearchResultsDismiss = useCallback(() => {
    setIsSearchActive(false)
    setSearchValue("")
  }, [])

  const handleSearchChange = useCallback((value: string) => {
    setSearchValue(value)
    setIsSearchActive(value.length > 0)
  }, [])

  const handleNavigationToggle = useCallback(() => {
    console.log("toggle navigation visibility")
  }, [])

  const logo = {
    width: 35,
    topBarSource: "https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg",
    accessibilityLabel: "Test Store",
  }

  const userMenuMarkup = (
    <>
      <div style={{ marginLeft: "10px" }} />
      <TopBar.Menu
        actions={[]}
        onClose={() => {}}
        onOpen={() => {}}
        open={false}
        activatorContent={
          <>
            <Icon source={NotificationMajor} />
          </>
        }
      ></TopBar.Menu>
      <TopBar.UserMenu
        actions={[]}
        onToggle={() => {}}
        open={false}
        name="2Hari"
        detail="Playground Test"
        initials="H"
      />
    </>
  )

  const searchResultsMarkup = <ActionList />

  const searchFieldMarkup = (
    <TopBar.SearchField
      onChange={handleSearchChange}
      value={searchValue}
      placeholder="Search"
      showFocusBorder
    />
  )

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      searchResultsVisible={isSearchActive}
      searchField={searchFieldMarkup}
      searchResults={searchResultsMarkup}
      onSearchResultsDismiss={handleSearchResultsDismiss}
      onNavigationToggle={handleNavigationToggle}
    />
  )

  const AppNavigation = (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            label: "Home",
            icon: HomeMinor,
          },
          {
            label: "Orders",
            icon: OrdersMinor,
            badge: "10",
          },
          {
            label: "Products",
            icon: ProductsMinor,
          },
          {
            label: "Customers",
            icon: CustomersMinor,
          },
          {
            label: "Content",
            icon: ContentMinor,
          },
          {
            label: "Analytics",
            icon: AnalyticsMinor,
          },
          {
            label: "Marketing",
            icon: MarketingMinor,
          },
          {
            label: "Discounts",
            icon: DiscountsMinor,
          },
        ]}
      />
      <Navigation.Section
        title="Sales channels"
        items={[
          {
            label: "Online Store",
            icon: StoreMinor,
          },
        ]}
        action={{
          icon: ChevronRightMinor,
          accessibilityLabel: "Add",
          onClick: () => {},
        }}
      />
      <Navigation.Section
        title="Apps"
        items={[
          {
            label: "Polaris Playground",
            icon: AppsMinor,
            selected: true,
          },
        ]}
        action={{
          icon: ChevronRightMinor,
          accessibilityLabel: "Add",
          onClick: () => {},
        }}
      />
    </Navigation>
  )
  return (
    <>
      <PolarisProvider
        i18n={translations}
        features={
          {
            // polarisSummerEditions2023: true,
          }
        }
      >
        <Frame
          navigation={AppNavigation}
          topBar={topBarMarkup}
          logo={logo}
        >
          {children}
        </Frame>
      </PolarisProvider>
    </>
  )
}

export default ShopifyLayout
