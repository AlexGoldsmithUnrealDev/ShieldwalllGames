#!/usr/bin/env python3
"""Reassemble the verified Stage 10B handover ZIP from its repository parts."""
from pathlib import Path
import hashlib
import sys
import zipfile

here = Path(__file__).resolve().parent
parts = sorted((here / "archive_parts").glob("Shieldwall_Games_Stage10B_CORRECTED_Claude_Handover.zip.part*"))
if len(parts) != 17:
    sys.exit(f"Expected 17 archive parts; found {len(parts)}")
dest = here / "Shieldwall_Games_Stage10B_CORRECTED_Claude_Handover.zip"
with dest.open("wb") as output:
    for part in parts:
        with part.open("rb") as source:
            while True:
                chunk = source.read(1024 * 1024)
                if not chunk:
                    break
                output.write(chunk)
expected = "b6e58a65cd05048737370843760390d57024a0d60d13d105c2a8ac9785169f4c"
actual = hashlib.sha256(dest.read_bytes()).hexdigest()
if actual != expected or dest.stat().st_size != 13343319:
    dest.unlink(missing_ok=True)
    sys.exit(f"Integrity check failed: {actual}; expected {expected}")
with zipfile.ZipFile(dest) as archive:
    bad = archive.testzip()
    if bad or len(archive.namelist()) != 33:
        sys.exit(f"Archive check failed: {bad or 'wrong member count'}")
print(f"Verified: {dest} ({dest.stat().st_size:,} bytes; 33 files)")
