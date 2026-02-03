import os
import win32print
import win32api

def print_empire_doc(file_path):
    # DIRECT COMMAND TO CANON PIXMA FOR A4 SIZE
    printer_name = win32print.GetDefaultPrinter()
    win32api.ShellExecute(0, "print", file_path, None, ".", 0)
    print(f"Document sent to {printer_name} for Salsabilah Empires.")

# Hook this to your Zoho Webhook or Website Checkout
