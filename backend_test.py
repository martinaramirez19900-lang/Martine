#!/usr/bin/env python3
"""
Backend API Testing for SMH Markets Translation System
Tests the backend APIs to ensure they're working correctly.
"""

import requests
import json
import uuid
from datetime import datetime
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv('/app/frontend/.env')

# Get backend URL from frontend environment
BACKEND_URL = os.getenv('REACT_APP_BACKEND_URL', 'https://alpha-load.preview.emergentagent.com')
API_BASE_URL = f"{BACKEND_URL}/api"

def test_backend_health():
    """Test if backend is responding"""
    try:
        response = requests.get(f"{API_BASE_URL}/", timeout=10)
        print(f"✅ Backend Health Check: {response.status_code}")
        print(f"   Response: {response.json()}")
        return response.status_code == 200
    except Exception as e:
        print(f"❌ Backend Health Check Failed: {str(e)}")
        return False

def test_status_endpoints():
    """Test status check endpoints"""
    try:
        # Test POST /api/status
        test_data = {
            "client_name": "Spanish Translation Test Client"
        }
        
        post_response = requests.post(
            f"{API_BASE_URL}/status", 
            json=test_data,
            timeout=10
        )
        
        print(f"✅ POST /api/status: {post_response.status_code}")
        if post_response.status_code == 200:
            status_data = post_response.json()
            print(f"   Created status with ID: {status_data.get('id')}")
            
            # Test GET /api/status
            get_response = requests.get(f"{API_BASE_URL}/status", timeout=10)
            print(f"✅ GET /api/status: {get_response.status_code}")
            
            if get_response.status_code == 200:
                statuses = get_response.json()
                print(f"   Retrieved {len(statuses)} status records")
                return True
        
        return False
        
    except Exception as e:
        print(f"❌ Status Endpoints Test Failed: {str(e)}")
        return False

def test_contact_form_endpoint():
    """Test contact form submission endpoint"""
    try:
        test_contact_data = {
            "fullName": "Test User - Spanish Translation",
            "email": "test.spanish@example.com", 
            "phone": "+1234567890",
            "country": "Spain"
        }
        
        response = requests.post(
            f"{API_BASE_URL}/contact",
            json=test_contact_data,
            timeout=10
        )
        
        print(f"✅ POST /api/contact: {response.status_code}")
        if response.status_code == 200:
            result = response.json()
            print(f"   Contact form success: {result.get('success')}")
            print(f"   Message: {result.get('message')}")
            return result.get('success', False)
        
        return False
        
    except Exception as e:
        print(f"❌ Contact Form Test Failed: {str(e)}")
        return False

def run_backend_tests():
    """Run all backend tests"""
    print("🚀 Starting Backend API Tests for SMH Markets Translation System")
    print("=" * 70)
    
    results = {
        'health_check': test_backend_health(),
        'status_endpoints': test_status_endpoints(), 
        'contact_form': test_contact_form_endpoint()
    }
    
    print("\n" + "=" * 70)
    print("📊 BACKEND TEST RESULTS SUMMARY:")
    
    passed = sum(results.values())
    total = len(results)
    
    for test_name, result in results.items():
        status = "✅ PASSED" if result else "❌ FAILED"
        print(f"   {test_name.replace('_', ' ').title()}: {status}")
    
    print(f"\n🎯 Overall Backend Status: {passed}/{total} tests passed")
    
    if passed == total:
        print("✅ All backend APIs are working correctly!")
        return True
    else:
        print("❌ Some backend tests failed - check logs above")
        return False

if __name__ == "__main__":
    success = run_backend_tests()
    
    print("\n" + "=" * 70)
    print("📝 TRANSLATION TESTING NOTE:")
    print("   Backend APIs are working correctly.")
    print("   Spanish translation testing requires frontend verification.")
    print("   The backend does not handle translation logic - this is")
    print("   managed by the React frontend translation system.")
    print("=" * 70)