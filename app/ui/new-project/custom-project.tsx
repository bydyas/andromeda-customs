import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/app/ui/drawer';

export default function CustomProject() {
  return (
    <Drawer>
      <DrawerTrigger className="h-14 w-full cursor-pointer rounded-sm bg-slate-200 px-6 hover:bg-slate-100 active:bg-slate-50">
        <span className="text-2xl font-medium uppercase">Custom Project</span>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>Close</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
