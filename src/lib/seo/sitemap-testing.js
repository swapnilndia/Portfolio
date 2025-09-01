/**
 * Sitemap Testing Utilities
 * Functions for testing and validating sitemap functionality
 */

import {
  getAllSitemapEntries,
  validateSitemapUrls,
  getSitemapStats,
} from './sitemap.js';

/**
 * Test sitemap generation
 */
export function testSitemapGeneration() {
  const tests = [];

  try {
    // Test 1: Get all sitemap entries
    const entries = getAllSitemapEntries();
    tests.push({
      name: 'Get sitemap entries',
      passed: entries.length > 0,
      result: `Found ${entries.length} entries`,
      entries: entries.length,
    });

    // Test 2: Validate URLs
    const validation = validateSitemapUrls();
    tests.push({
      name: 'Validate sitemap URLs',
      passed: validation.isValid,
      result: validation.isValid
        ? 'All URLs valid'
        : `${validation.errors.length} errors`,
      errors: validation.errors,
    });

    // Test 3: Check priorities
    const priorityTest = entries.every(
      (entry) => entry.priority >= 0 && entry.priority <= 1
    );
    tests.push({
      name: 'Check priority values',
      passed: priorityTest,
      result: priorityTest
        ? 'All priorities valid'
        : 'Invalid priority values found',
    });

    // Test 4: Check change frequencies
    const validFrequencies = [
      'always',
      'hourly',
      'daily',
      'weekly',
      'monthly',
      'yearly',
      'never',
    ];
    const frequencyTest = entries.every((entry) =>
      validFrequencies.includes(entry.changeFrequency)
    );
    tests.push({
      name: 'Check change frequencies',
      passed: frequencyTest,
      result: frequencyTest
        ? 'All frequencies valid'
        : 'Invalid frequencies found',
    });

    // Test 5: Check last modified dates
    const dateTest = entries.every(
      (entry) => entry.lastModified && !isNaN(Date.parse(entry.lastModified))
    );
    tests.push({
      name: 'Check last modified dates',
      passed: dateTest,
      result: dateTest ? 'All dates valid' : 'Invalid dates found',
    });

    // Test 6: Check for duplicate URLs
    const urls = entries.map((entry) => entry.url);
    const uniqueUrls = [...new Set(urls)];
    const duplicateTest = urls.length === uniqueUrls.length;
    tests.push({
      name: 'Check for duplicate URLs',
      passed: duplicateTest,
      result: duplicateTest
        ? 'No duplicates found'
        : `${urls.length - uniqueUrls.length} duplicates found`,
    });
  } catch (error) {
    tests.push({
      name: 'Sitemap generation',
      passed: false,
      result: `Error: ${error.message}`,
      error: error.message,
    });
  }

  const passedTests = tests.filter((test) => test.passed).length;
  const totalTests = tests.length;

  return {
    summary: {
      total: totalTests,
      passed: passedTests,
      failed: totalTests - passedTests,
      success: passedTests === totalTests,
    },
    tests,
    timestamp: new Date().toISOString(),
  };
}

/**
 * Test robots.txt generation
 */
export function testRobotsTxt() {
  const tests = [];

  try {
    // Import the robots.txt generator
    const { generateRobotsTxt } = require('./sitemap.js');
    const robotsTxt = generateRobotsTxt();

    // Test 1: Contains User-agent
    tests.push({
      name: 'Contains User-agent directive',
      passed: robotsTxt.includes('User-agent:'),
      result: robotsTxt.includes('User-agent:')
        ? 'Found User-agent'
        : 'Missing User-agent',
    });

    // Test 2: Contains Sitemap reference
    tests.push({
      name: 'Contains Sitemap reference',
      passed: robotsTxt.includes('Sitemap:'),
      result: robotsTxt.includes('Sitemap:')
        ? 'Found Sitemap reference'
        : 'Missing Sitemap reference',
    });

    // Test 3: Contains Allow directive
    tests.push({
      name: 'Contains Allow directive',
      passed: robotsTxt.includes('Allow:'),
      result: robotsTxt.includes('Allow:')
        ? 'Found Allow directive'
        : 'Missing Allow directive',
    });

    // Test 4: Contains Disallow directive
    tests.push({
      name: 'Contains Disallow directive',
      passed: robotsTxt.includes('Disallow:'),
      result: robotsTxt.includes('Disallow:')
        ? 'Found Disallow directive'
        : 'Missing Disallow directive',
    });

    // Test 5: Proper line endings
    const lineEndingTest = !robotsTxt.includes('\r\n');
    tests.push({
      name: 'Proper line endings',
      passed: lineEndingTest,
      result: lineEndingTest
        ? 'Unix line endings'
        : 'Windows line endings detected',
    });
  } catch (error) {
    tests.push({
      name: 'Robots.txt generation',
      passed: false,
      result: `Error: ${error.message}`,
      error: error.message,
    });
  }

  const passedTests = tests.filter((test) => test.passed).length;
  const totalTests = tests.length;

  return {
    summary: {
      total: totalTests,
      passed: passedTests,
      failed: totalTests - passedTests,
      success: passedTests === totalTests,
    },
    tests,
    timestamp: new Date().toISOString(),
  };
}

/**
 * Run comprehensive sitemap tests
 */
export function runAllSitemapTests() {
  const sitemapTests = testSitemapGeneration();
  const robotsTests = testRobotsTxt();
  const stats = getSitemapStats();

  return {
    summary: {
      sitemapTests: sitemapTests.summary,
      robotsTests: robotsTests.summary,
      overallSuccess:
        sitemapTests.summary.success && robotsTests.summary.success,
    },
    details: {
      sitemap: sitemapTests,
      robots: robotsTests,
      stats,
    },
    timestamp: new Date().toISOString(),
  };
}

/**
 * Generate test report
 */
export function generateTestReport() {
  const testResults = runAllSitemapTests();

  const report = `# Sitemap Test Report
Generated: ${testResults.timestamp}

## Summary
- Sitemap Tests: ${testResults.summary.sitemapTests.passed}/${testResults.summary.sitemapTests.total} passed
- Robots.txt Tests: ${testResults.summary.robotsTests.passed}/${testResults.summary.robotsTests.total} passed
- Overall Success: ${testResults.summary.overallSuccess ? 'PASS' : 'FAIL'}

## Sitemap Statistics
- Total Pages: ${testResults.details.stats.totalPages}
- Static Pages: ${testResults.details.stats.staticPages}
- Project Pages: ${testResults.details.stats.projectPages}
- High Priority Pages: ${testResults.details.stats.priorities.high}
- Medium Priority Pages: ${testResults.details.stats.priorities.medium}
- Low Priority Pages: ${testResults.details.stats.priorities.low}

## Detailed Results

### Sitemap Tests
${testResults.details.sitemap.tests
  .map(
    (test) =>
      `- ${test.name}: ${test.passed ? 'PASS' : 'FAIL'} - ${test.result}`
  )
  .join('\n')}

### Robots.txt Tests
${testResults.details.robots.tests
  .map(
    (test) =>
      `- ${test.name}: ${test.passed ? 'PASS' : 'FAIL'} - ${test.result}`
  )
  .join('\n')}

## Recommendations
${
  testResults.summary.overallSuccess
    ? '✅ All tests passed! Your sitemap and robots.txt are properly configured.'
    : '❌ Some tests failed. Please review the failed tests and fix the issues.'
}
`;

  return report;
}
