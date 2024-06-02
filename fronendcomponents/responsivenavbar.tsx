"use client";
import Link from "next/link";
import {
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenu,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from "@/components/ui/collapsible";

export default function Navbar() {
  return (
    <header className="flex h-16 w-full items-center justify-between px-4 md:px-6 lg:px-8">
      <Link className="flex items-center gap-2 text-lg font-semibold" href="#">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="hidden items-center gap-6 md:flex">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                href="#"
              >
                Home
              </Link>
            </NavigationMenuLink>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] p-2">
                  <NavigationMenuLink asChild>
                    <Link
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                      href="#"
                    >
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        Product A
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                        Description of Product A
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                      href="#"
                    >
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        Product B
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                        Description of Product B
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                      href="#"
                    >
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        Product C
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                        Description of Product C
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                href="#"
              >
                Pricing
              </Link>
            </NavigationMenuLink>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[550px] grid-cols-2 p-2">
                  <NavigationMenuLink asChild>
                    <Link
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                      href="#"
                    >
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        Blog
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                        Read our latest blog posts.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                      href="#"
                    >
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        Documentation
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                        Learn how to use our products.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                      href="#"
                    >
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        Case Studies
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                        Read our customer case studies.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                      href="#"
                    >
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        Help Center
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                        Get help with our products.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                href="#"
              >
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
      <div className="bg-gray-100">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="md:hidden" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="grid gap-2 py-6">
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="#"
              >
                Home
              </Link>
              <Collapsible className="grid gap-4">
                <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                  Products
                  <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="-mx-6 grid gap-6 bg-gray-100 p-6 dark:bg-gray-800">
                    <Link
                      className="group grid h-auto w-full justify-start gap-1"
                      href="#"
                    >
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        Product A
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                        Description of Product A
                      </div>
                    </Link>
                    <Link
                      className="group grid h-auto w-full justify-start gap-1"
                      href="#"
                    >
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        Product B
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                        Description of Product B
                      </div>
                    </Link>
                    <Link
                      className="group grid h-auto w-full justify-start gap-1"
                      href="#"
                    >
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        Product C
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                        Description of Product C
                      </div>
                    </Link>
                  </div>
                </CollapsibleContent>
              </Collapsible>
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="#"
              >
                Pricing
              </Link>
              <Collapsible className="grid gap-4">
                <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                  Resources
                  <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="-mx-6 grid gap-6 bg-gray-100 p-6 dark:bg-gray-800">
                    <Link
                      className="group grid h-auto w-full justify-start gap-1"
                      href="#"
                    >
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        Blog
                      </div>
                    </Link>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
